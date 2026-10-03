export const productNarrative = {
  promise: 'Understand your code. Change it safely.',
  loop: ['Understand', 'Change', 'Verify'],
  pillars: [
    { label: 'Understand', title: 'Build repository-grounded context', description: 'Analyze structure, dependencies, architecture, Git history, and engineering reality from deterministic repository evidence.' },
    { label: 'Change', title: 'Plan before agents modify code', description: 'Turn grounded evidence into bounded engineering plans and persisted Agent Change Contracts.' },
    { label: 'Verify', title: 'Prove the change against the prepared state', description: 'Verify the persisted contract and repository state instead of silently trusting regenerated plans.' },
  ],
} as const;
