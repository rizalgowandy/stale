const schema = require('../lib/schema')

describe('schema', () => {
  test('defaults', async () => {
    expect(schema.validate({}).value).toEqual({
      daysUntilStale: 60,
      daysUntilClose: 7,
      exemptLabels: ['pinned', 'security'],
      exemptProjects: false,
      exemptMilestones: false,
      staleLabel: 'wontfix',
      perform: true,
      markComment: 'This issue has been automatically marked as stale because ' +
        'it has not had recent activity. It will be closed if no further ' +
        'activity occurs. Thank you for your contributions.',
      unmarkComment: false,
      closeComment: false,
      limitPerRun: 30
    })
  })
})
