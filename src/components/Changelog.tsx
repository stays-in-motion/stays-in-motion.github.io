import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { changelogData, type ChangelogEntry } from "@/data/changelog";

const typeColors = {
  major: "bg-red-100 text-red-800 border-red-200",
  minor: "bg-blue-100 text-blue-800 border-blue-200", 
  patch: "bg-green-100 text-green-800 border-green-200"
};

const TypeBadge = ({ type }: { type: ChangelogEntry['type'] }) => (
  <span className={`px-2 py-1 text-xs font-medium rounded-full border ${typeColors[type]}`}>
    {type.charAt(0).toUpperCase() + type.slice(1)}
  </span>
);

const ChangelogEntry = ({ entry }: { entry: ChangelogEntry }) => (
  <Card className="mb-6">
    <CardHeader>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <CardTitle className="text-xl">v{entry.version}</CardTitle>
          <TypeBadge type={entry.type} />
        </div>
        <time className="text-sm text-muted-foreground">{entry.date}</time>
      </div>
      <p className="text-lg font-medium text-muted-foreground">{entry.title}</p>
    </CardHeader>
    <CardContent className="space-y-4">
      {entry.breaking && entry.breaking.length > 0 && (
        <div>
          <h4 className="font-semibold text-red-600 mb-2">⚠️ Breaking Changes</h4>
          <ul className="list-disc list-inside space-y-1 text-sm">
            {entry.breaking.map((item, index) => (
              <li key={index} className="text-red-700">{item}</li>
            ))}
          </ul>
        </div>
      )}
      
      {entry.features && entry.features.length > 0 && (
        <div>
          <h4 className="font-semibold text-green-600 mb-2">✨ New Features</h4>
          <ul className="list-disc list-inside space-y-1 text-sm">
            {entry.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      )}
      
      {entry.improvements && entry.improvements.length > 0 && (
        <div>
          <h4 className="font-semibold text-blue-600 mb-2">🚀 Improvements</h4>
          <ul className="list-disc list-inside space-y-1 text-sm">
            {entry.improvements.map((improvement, index) => (
              <li key={index}>{improvement}</li>
            ))}
          </ul>
        </div>
      )}
      
      {entry.bugfixes && entry.bugfixes.length > 0 && (
        <div>
          <h4 className="font-semibold text-orange-600 mb-2">🐛 Bug Fixes</h4>
          <ul className="list-disc list-inside space-y-1 text-sm">
            {entry.bugfixes.map((fix, index) => (
              <li key={index}>{fix}</li>
            ))}
          </ul>
        </div>
      )}
    </CardContent>
  </Card>
);

export function Changelog() {
  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Mova Changelog</h1>
        <p className="text-xl text-muted-foreground">
          Track the latest updates and improvements to the Mova app
        </p>
      </div>

      <div className="space-y-6">
        {changelogData.map((entry) => (
          <ChangelogEntry key={entry.version} entry={entry} />
        ))}
      </div>

      <div className="mt-12 p-6 bg-muted/50 rounded-lg">
        <h3 className="font-semibold mb-2">Stay Updated</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Want to be notified about new releases? Follow our development progress and get updates.
        </p>
        <div className="space-y-2">
          <div>
            <a
              href="mailto:movastaysinmotionar@gmail.com"
              className="text-blue-600 hover:text-blue-800 underline text-sm"
            >
              Subscribe to release notifications
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}