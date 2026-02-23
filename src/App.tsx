import { useState } from "react";

type Status = "not-started" | "in-progress" | "shipped";

const statusLabel: Record<Status, string> = {
  "not-started": "Not Started",
  "in-progress": "In Progress",
  shipped: "Shipped",
};

export function App() {
  const [status, setStatus] = useState<Status>("not-started");

  const handleCopyPrompt = async () => {
    const text =
      "Describe the current step, what success looks like, and what should happen next for this Job Notification workspace.";
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Silent failure; design system does not depend on copy succeeding.
    }
  };

  return (
    <div className="app-shell">
      <header className="top-bar">
        <div className="top-bar__app-name">Job Notification App</div>
        <div className="top-bar__progress">Step 1 / 4</div>
        <div
          className={[
            "status-badge",
            status === "not-started"
              ? "status-badge--not-started"
              : status === "in-progress"
              ? "status-badge--in-progress"
              : "status-badge--shipped",
          ].join(" ")}
        >
          {statusLabel[status]}
        </div>
      </header>

      <section className="context-header">
        <h1 className="context-header__title">
          Shape the workspace for your job notifications.
        </h1>
        <p className="context-header__subtitle">
          Use this step to define how the interface should feel before any
          product logic is introduced. The focus here is clarity, spacing, and
          consistent structure.
        </p>
      </section>

      <main className="layout-main">
        <section className="layout-main__primary">
          <div className="card">
            <h2 className="card__title">Primary workspace canvas</h2>
            <p className="card__body">
              This area holds the main interactions for a single step. It is
              designed for calm, predictable layouts: clear labels, comfortable
              spacing, and a single primary action.
            </p>

            <div style={{ height: "16px" }} />

            <div className="form-row">
              <label className="form-label" htmlFor="workspace-title">
                Workspace title
              </label>
              <input
                id="workspace-title"
                className="input-text"
                placeholder="e.g. Notification configuration step"
              />
            </div>

            <div className="form-row">
              <label className="form-label" htmlFor="workspace-description">
                Short description
              </label>
              <textarea
                id="workspace-description"
                className="input-textarea"
                placeholder="Describe what someone should accomplish in this part of the app."
              />
            </div>

            <div className="stack-vertical">
              <div className="empty-state">
                <h3 className="empty-state__title">No UI elements added yet</h3>
                <p className="empty-state__body">
                  When this design system is wired into real features, this
                  space will host cards, tables, or forms that follow the same
                  spacing and typography rules.
                </p>
              </div>
            </div>

            <div className="button-row">
              <button
                className="button button-primary"
                onClick={() => setStatus("in-progress")}
              >
                Mark step as in progress
              </button>
              <button
                className="button button-secondary"
                onClick={() => setStatus("shipped")}
              >
                Mark step as shipped
              </button>
            </div>
          </div>

          <div className="card">
            <h2 className="card__title">Error and recovery pattern</h2>
            <div className="error-state">
              <h3 className="error-state__title">
                We could not load preview content.
              </h3>
              <p className="error-state__body">
                The design system expects a valid data source before rendering a
                preview. Confirm that the integration is configured, then try
                again. Nothing you entered here has been lost.
              </p>
            </div>
          </div>
        </section>

        <aside className="layout-main__secondary">
          <div className="card">
            <h2 className="card__title">Step guidance</h2>
            <p className="card__body">
              Use this panel to provide a concise explanation of the current
              step. Keep language neutral and practical. Avoid selling; focus on
              helping someone make a clear decision.
            </p>
          </div>

          <div className="card">
            <h2 className="card__title">Copyable prompt</h2>
            <div className="copy-box">
              <div className="copy-box__content">
                Shape a calm, intentional interface for configuring job
                notifications. Emphasize clear hierarchy, generous spacing, and
                predictable components. Avoid gradients, heavy shadows, or
                playful visuals.
              </div>
              <div className="button-row">
                <button
                  type="button"
                  className="button button-secondary"
                  onClick={handleCopyPrompt}
                >
                  Copy prompt
                </button>
              </div>
            </div>
          </div>
        </aside>
      </main>

      <footer className="proof-footer">
        <ul className="proof-footer__list">
          <li className="proof-footer__item">
            <span className="checkbox" aria-hidden="true" /> <span>UI Built</span>
          </li>
          <li className="proof-footer__item">
            <span className="checkbox" aria-hidden="true" />{" "}
            <span>Logic Working</span>
          </li>
          <li className="proof-footer__item">
            <span className="checkbox" aria-hidden="true" />{" "}
            <span>Test Passed</span>
          </li>
          <li className="proof-footer__item">
            <span className="checkbox" aria-hidden="true" />{" "}
            <span>Deployed</span>
          </li>
        </ul>
      </footer>
    </div>
  );
}

