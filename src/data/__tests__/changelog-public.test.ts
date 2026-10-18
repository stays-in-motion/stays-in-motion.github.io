import { describe, expect, test } from 'bun:test';
import { changelogData } from '../changelog-public';

interface PublicReleaseManifest {
  public_ios: {
    version: string;
    current_version_release_date_utc: string;
    historical_versions: { version: string; release_date: string }[];
  };
}

async function releaseFacts(): Promise<PublicReleaseManifest> {
  return Bun.file(new URL('../public-release-facts.json', import.meta.url)).json();
}

describe('real public release data', () => {
  test('current release uses the observed Apple date instead of an internal preparation date', async () => {
    const { public_ios: facts } = await releaseFacts();
    const current = changelogData.find((entry) => entry.version === facts.version);
    expect(current?.date).toBe(facts.current_version_release_date_utc.slice(0, 10));
    expect(current?.features?.join(' ')).toMatch(/save generated classes/i);
  });

  test('older account/playlist release does not claim class-builder features', async () => {
    const { public_ios: facts } = await releaseFacts();
    for (const fact of facts.historical_versions) {
      const historical = changelogData.find((entry) => entry.version === fact.version);
      expect(historical?.date).toBe(fact.release_date);
      expect(historical?.features?.join(' ')).toMatch(/account.*playlists/i);
      expect(JSON.stringify(historical)).not.toMatch(/class builder|class editing|music recommendations/i);
    }
  });
});
