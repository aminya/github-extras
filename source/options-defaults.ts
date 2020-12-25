// This list is used to disable the features that hide/remove a feature of GitHub by default

export const featureRemovers = [
  "clean-mergeability-box",
  "clean-footer",
  "hide-tips",
  "hide-readme-header",
  "hide-obvious-tooltips",
  "clean-conversations",
  "clean-notifications",
  "clean-pinned-issues",
  "clean-dashboard",
  "hide-useless-newsfeed-events",
  "hide-watch-and-fork-count",
  "remove-projects-tab",
  "hide-navigation-hover-highlight",
  "hide-own-stars",
  "hide-empty-meta",
  "hide-useless-comments",
  "hide-inactive-deployments",
  "hide-issue-list-autocomplete",
  "clean-sidebar",
  "clean-conversation-filters",
  "hide-zero-packages",
  "clean-rich-text-editor",
  "cleanup-repo-filelist-actions",
  "clean-conversation-headers",
  "new-repo-disable-projects-and-wikis",
]

export const otherDisabledFeatures = [
  "set-default-repositories-type-to-sources", // discourages forking and collaboration over hosting personal repositories
  "quick-repo-deletion", // very dangerous
  "edit-files-faster" // still buggy
]

export function isFeatureRemover(id: string) {
  return featureRemovers.includes(id)
}

export function isDisabledByDefault(id: string) {
  return featureRemovers.includes(id) || otherDisabledFeatures.includes(id)
}
