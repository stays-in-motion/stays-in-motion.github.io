const workflow = [
  ['01', 'Start with your class', 'Choose a duration, equipment and class structure to shape a draft.'],
  [
    '02',
    'Put your judgment first',
    'Review each movement, coaching note and transition. Edit the plan for the people you teach.',
  ],
  ['03', 'Keep a useful starting point', 'Save the edited class, reopen it and adapt it for another session.'],
] as const;

export function AboutSection() {
  return (
    <section id="about" className="py-20 border-t border-border" aria-labelledby="about-heading">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="offer-progress font-semibold mb-4">THE PLANNING WORKFLOW</p>
            <h2 id="about-heading" className="text-4xl md:text-5xl font-bold mb-6">
              A draft to work with.
              <br />
              Room to teach your way.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              The planner preview brings the structure and teaching notes together. You decide what belongs in the
              finished class.
            </p>
            <ol className="space-y-7">
              {workflow.map(([step, title, description]) => (
                <li key={step} className="flex gap-5">
                  <span className="offer-energy font-mono text-xl">{step}</span>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">{title}</h3>
                    <p className="text-muted-foreground">{description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <figure
            data-testid="illustrative-plan"
            className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-lg"
          >
            <figcaption className="mb-6">
              <p className="text-sm uppercase tracking-wide offer-progress font-semibold">
                Illustrative plan · manually written
              </p>
              <h3 className="text-2xl font-bold mt-2">A 30-minute class outline</h3>
              <p className="text-sm text-muted-foreground mt-3">
                An example of planning structure, not an app screenshot, a generated result or a complete workout to
                teach.
              </p>
            </figcaption>
            <dl className="space-y-4">
              {[
                ['05 min', 'Warm-up', 'Prepare for the movements you have selected.'],
                ['20 min', 'Main section', 'Arrange the exercises, transitions and recovery time.'],
                ['05 min', 'Cool-down', 'Allow time to finish and settle the class.'],
              ].map(([time, title, note]) => (
                <div key={title} className="border-t border-border pt-4">
                  <dt className="flex justify-between gap-4 font-semibold">
                    <span>{title}</span>
                    <span className="font-mono offer-energy">{time}</span>
                  </dt>
                  <dd className="text-sm text-muted-foreground mt-2">{note}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 rounded-lg bg-secondary p-4">
              <p className="font-semibold mb-2">Before you teach</p>
              <p className="text-sm text-muted-foreground">
                Check exercise selection, timing, transitions and participant needs. Add your cues and adaptations.
              </p>
            </div>
            <p className="text-xs text-muted-foreground mt-5">
              Written for this page to explain the workflow. No model was run to produce this example; it is not
              evidence of generation quality.
            </p>
          </figure>
        </div>
      </div>
    </section>
  );
}
