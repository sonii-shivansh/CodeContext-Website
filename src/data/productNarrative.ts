export const productNarrative = {
  promise: 'Understand your code. Change it safely.',
  loop: ['Understand', 'Change', 'Verify'],
  pillars: [
    {
      label: 'Understand',
      title: 'Build repository-grounded context',
      description: 'Analyze structure, dependencies, architecture, Git history, and engineering reality from deterministic repository evidence.',
      href: 'architecture/',
      action: 'See the model',
    },
    {
      label: 'Change',
      title: 'Plan before agents modify code',
      description: 'Turn grounded evidence into bounded engineering plans and persisted Agent Change Contracts.',
      href: 'how-to-use/#prepare',
      action: 'See the workflow',
    },
    {
      label: 'Verify',
      title: 'Prove the change against the prepared state',
      description: 'Verify the persisted contract and repository state instead of silently trusting regenerated plans.',
      href: 'demo/',
      action: 'See the proof',
    },
  ],
} as const;
