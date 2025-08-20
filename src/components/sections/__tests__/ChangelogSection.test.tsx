import { test, expect, describe, beforeEach, mock } from "bun:test";
import { render, screen, cleanup } from "@testing-library/react";
import { ChangelogSection } from "../ChangelogSection";
import "../../../test-setup";

// Mock the changelog data
const mockChangelogData = [
  {
    version: "2.1.0",
    date: "January 15, 2025",
    type: "minor",
    title: "Enhanced User Experience",
    features: [
      "New workout categories",
      "Improved playlist conversion speed"
    ],
    improvements: [
      "Better error handling",
      "Optimized memory usage"
    ],
    bugfixes: [
      "Fixed timer sync issues",
      "Resolved crash on large playlists"
    ]
  },
  {
    version: "2.0.0",
    date: "December 1, 2024",
    type: "major",
    title: "Major Release",
    features: [
      "Complete UI redesign",
      "New authentication system"
    ],
    breaking: [
      "API endpoints changed",
      "Legacy data migration required"
    ]
  },
  {
    version: "1.5.1",
    date: "November 15, 2024",
    type: "patch",
    title: "Bug Fixes",
    bugfixes: [
      "Fixed login issues",
      "Improved stability"
    ]
  }
];

mock.module("@/data/changelog-public", () => ({
  changelogData: mockChangelogData,
  type: {
    ChangelogEntry: {}
  }
}));

describe("ChangelogSection", () => {
  beforeEach(() => {
    cleanup();
  });

  test("renders main heading and description", () => {
    render(<ChangelogSection />);
    
    expect(screen.getByRole("heading", { name: /app evolution/i })).toBeInTheDocument();
    expect(screen.getByText(/follow mova's journey as we continuously improve/i)).toBeInTheDocument();
  });

  test("renders all changelog entries from data", () => {
    render(<ChangelogSection />);
    
    // All version numbers should be present
    expect(screen.getByText("v2.1.0")).toBeInTheDocument();
    expect(screen.getByText("v2.0.0")).toBeInTheDocument();
    expect(screen.getByText("v1.5.1")).toBeInTheDocument();
    
    // All titles should be present
    expect(screen.getByRole("heading", { name: /enhanced user experience/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /major release/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /bug fixes/i })).toBeInTheDocument();
  });

  test("displays correct badge colors for different release types", () => {
    render(<ChangelogSection />);
    
    const majorBadge = screen.getByText("v2.0.0");
    const minorBadge = screen.getByText("v2.1.0");
    const patchBadge = screen.getByText("v1.5.1");
    
    expect(majorBadge).toHaveClass("bg-accent-intensity", "text-white");
    expect(minorBadge).toHaveClass("bg-accent-progress", "text-white");
    expect(patchBadge).toHaveClass("bg-accent-energy", "text-black");
  });

  test("renders release dates correctly", () => {
    render(<ChangelogSection />);
    
    expect(screen.getByText("January 15, 2025")).toBeInTheDocument();
    expect(screen.getByText("December 1, 2024")).toBeInTheDocument();
    expect(screen.getByText("November 15, 2024")).toBeInTheDocument();
  });

  test("displays features section with correct styling", () => {
    render(<DownloadSection />);
    
    expect(screen.getByText("✨ New Features")).toBeInTheDocument();
    expect(screen.getByText("• New workout categories")).toBeInTheDocument();
    expect(screen.getByText("• Improved playlist conversion speed")).toBeInTheDocument();
    expect(screen.getByText("• Complete UI redesign")).toBeInTheDocument();
    
    const featuresHeading = screen.getByText("✨ New Features");
    expect(featuresHeading).toHaveClass("text-accent-energy");
  });

  test("displays improvements section with correct styling", () => {
    render(<ChangelogSection />);
    
    expect(screen.getByText("🚀 Improvements")).toBeInTheDocument();
    expect(screen.getByText("• Better error handling")).toBeInTheDocument();
    expect(screen.getByText("• Optimized memory usage")).toBeInTheDocument();
    
    const improvementsHeading = screen.getByText("🚀 Improvements");
    expect(improvementsHeading).toHaveClass("text-accent-progress");
  });

  test("displays bug fixes section with correct styling", () => {
    render(<ChangelogSection />);
    
    expect(screen.getByText("🐛 Bug Fixes")).toBeInTheDocument();
    expect(screen.getByText("• Fixed timer sync issues")).toBeInTheDocument();
    expect(screen.getByText("• Resolved crash on large playlists")).toBeInTheDocument();
    expect(screen.getByText("• Fixed login issues")).toBeInTheDocument();
    
    const bugfixesHeading = screen.getByText("🐛 Bug Fixes");
    expect(bugfixesHeading).toHaveClass("text-accent-intensity");
  });

  test("displays breaking changes section with warning styling", () => {
    render(<ChangelogSection />);
    
    expect(screen.getByText("⚠️ Breaking Changes")).toBeInTheDocument();
    expect(screen.getByText("• API endpoints changed")).toBeInTheDocument();
    expect(screen.getByText("• Legacy data migration required")).toBeInTheDocument();
    
    const breakingHeading = screen.getByText("⚠️ Breaking Changes");
    expect(breakingHeading).toHaveClass("text-destructive");
    
    // Breaking change items should also have destructive styling
    const breakingItems = screen.getAllByText(/• API endpoints changed|• Legacy data migration required/);
    breakingItems.forEach(item => {
      expect(item).toHaveClass("text-destructive");
    });
  });

  test("timeline structure is properly rendered", () => {
    render(<ChangelogSection />);
    
    // Timeline should have main line
    const timeline = document.querySelector('.absolute.left-8.top-0.bottom-0');
    expect(timeline).toHaveClass("w-0.5", "bg-border");
    
    // Timeline dots should be present
    const timelineDots = document.querySelectorAll('.w-4.h-4.bg-primary.rounded-full');
    expect(timelineDots.length).toBe(3); // One for each release
  });

  test("timeline entries have proper spacing and layout", () => {
    render(<ChangelogSection />);
    
    // Each timeline entry should have proper margin
    const timelineEntries = document.querySelectorAll('.ml-20.pb-12');
    expect(timelineEntries.length).toBe(3);
    
    // Cards should have hover effects
    const cards = document.querySelectorAll('.transition-all.duration-300.hover\\:shadow-lg');
    expect(cards.length).toBe(3);
  });

  test("only shows sections that have content", () => {
    render(<ChangelogSection />);
    
    // v1.5.1 should only show bug fixes, not features or improvements
    const bugFixesOnlyCard = screen.getByText("v1.5.1").closest('.p-6');
    
    // Should have bug fixes
    expect(bugFixesOnlyCard).toContainHTML("🐛 Bug Fixes");
    
    // Should not have features or improvements sections for this entry
    const sectionsInCard = bugFixesOnlyCard?.querySelectorAll('h4');
    const sectionTexts = Array.from(sectionsInCard || []).map(h4 => h4.textContent);
    
    expect(sectionTexts).toContain("🐛 Bug Fixes");
    expect(sectionTexts).not.toContain("✨ New Features");
    expect(sectionTexts).not.toContain("🚀 Improvements");
  });

  test("timeline dots and lines are positioned correctly", () => {
    render(<ChangelogSection />);
    
    // Timeline dots
    const dots = document.querySelectorAll('.absolute.left-8.top-6.w-4.h-4');
    expect(dots.length).toBe(3);
    
    // Timeline connecting lines (should be n-1 for n entries)
    const lines = document.querySelectorAll('.absolute.left-10.top-10.w-0\\.5.h-full');
    expect(lines.length).toBe(2); // Should be one less than total entries
  });

  test("section has proper ID for navigation", () => {
    render(<ChangelogSection />);
    
    const section = screen.getByRole("region");
    expect(section).toHaveAttribute("id", "changelog");
  });

  test("background styling is applied to section", () => {
    render(<ChangelogSection />);
    
    const section = screen.getByRole("region");
    expect(section).toHaveClass("bg-secondary/30");
  });

  test("responsive grid layout is applied", () => {
    render(<ChangelogSection />);
    
    // Version badges should be responsive
    const badgeContainers = document.querySelectorAll('.flex.flex-col.sm\\:flex-row');
    expect(badgeContainers.length).toBeGreaterThan(0);
  });

  test("all list items are properly formatted", () => {
    render(<ChangelogSection />);
    
    // All list items should start with bullet points
    const listItems = screen.getAllByText(/^•/);
    expect(listItems.length).toBeGreaterThan(0);
    
    // Features should have bold text
    const featureItems = screen.getAllByText(/• New workout categories|• Improved playlist conversion speed/);
    featureItems.forEach(item => {
      expect(item).toHaveClass("text-foreground", "font-medium");
    });
    
    // Improvements and bug fixes should have muted text
    const mutedItems = screen.getAllByText(/• Better error handling|• Fixed timer sync issues/);
    mutedItems.forEach(item => {
      expect(item).toHaveClass("text-muted-foreground");
    });
  });

  test("handles missing optional fields gracefully", () => {
    // Test with minimal changelog entry
    const minimalData = [{
      version: "1.0.0",
      date: "January 1, 2024",
      type: "major",
      title: "Initial Release"
      // No features, improvements, bugfixes, or breaking changes
    }];
    
    mock.module("@/data/changelog-public", () => ({
      changelogData: minimalData
    }));
    
    render(<ChangelogSection />);
    
    expect(screen.getByText("v1.0.0")).toBeInTheDocument();
    expect(screen.getByText("Initial Release")).toBeInTheDocument();
    
    // Should not render empty sections
    expect(screen.queryByText("✨ New Features")).not.toBeInTheDocument();
    expect(screen.queryByText("🚀 Improvements")).not.toBeInTheDocument();
    expect(screen.queryByText("🐛 Bug Fixes")).not.toBeInTheDocument();
    expect(screen.queryByText("⚠️ Breaking Changes")).not.toBeInTheDocument();
  });
});