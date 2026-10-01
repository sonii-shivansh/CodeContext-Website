export type DemoView = 'repository' | 'impact' | 'evidence' | 'plan';

export const demoData = {
  repository: {
    title: 'payment-service',
    files: 428,
    relationships: 1284,
    hotspots: 12,
    nodes: [
      { name: 'PaymentController', kind: 'controller', x: 14, y: 28 },
      { name: 'PaymentService', kind: 'service', x: 43, y: 18 },
      { name: 'PaymentRepository', kind: 'repository', x: 73, y: 32 },
      { name: 'FraudService', kind: 'service', x: 43, y: 66 },
      { name: 'RiskRepository', kind: 'repository', x: 74, y: 70 },
      { name: 'PaymentTests', kind: 'test', x: 14, y: 72 }
    ],
    edges: [
      ['PaymentController', 'PaymentService'],
      ['PaymentService', 'PaymentRepository'],
      ['PaymentService', 'FraudService'],
      ['FraudService', 'RiskRepository'],
      ['PaymentTests', 'PaymentService']
    ]
  },
  impact: {
    changed: 'PaymentService',
    affected: [
      { name: 'PaymentController', reason: 'caller contract' },
      { name: 'FraudService', reason: 'downstream dependency' },
      { name: 'PaymentTests', reason: 'direct test coverage' }
    ],
    risk: 'Review contracts and affected tests before implementation.',
    uncertainty: 'Runtime gateway behaviour still requires integration verification.'
  },
  evidence: [
    { id: 'E17', source: 'PaymentService.kt:42', finding: 'Calls PaymentRepository.save()', confidence: 'direct' },
    { id: 'E21', source: 'PaymentController.kt:28', finding: 'Delegates payment creation to PaymentService', confidence: 'direct' },
    { id: 'E34', source: 'git history', finding: 'Recent fraud-flow changes touched PaymentService', confidence: 'historical' }
  ],
  plan: [
    ['01', 'Inspect affected contracts', 'PaymentController and PaymentRepository'],
    ['02', 'Update implementation', 'Keep FraudService boundary explicit'],
    ['03', 'Update verification', 'Cover direct callers and impacted tests'],
    ['04', 'Run integration verification', 'Confirm external gateway behaviour']
  ]
} as const;
