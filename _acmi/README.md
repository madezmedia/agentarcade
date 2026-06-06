# ACMI Sync — AgentArcade Redesign & Deploy

Date: 2026-06-05
Agent: claude-engineer (opencode session)
CorrelationId base: `claudeEngineerAgentArcadeRedesign-1780674139781`

## How to apply

Run these in order via `acmi_*` MCP tools or the `@madezmedia/acmi` SDK:

1. `acmi_profile` — registry fleet entry
2. `acmi_signal` — current state signals
3. `acmi_event` — milestone event on agent-coordination thread
4. `acmi_event` — team-loop alignment event
5. `acmi_event` — artifact-published for the deploy
6. `acmi_rollup_set` — session rollup

## Fleet convention

Summary format: `[kind-tag @recipient] description`
CorrelationId format: `<descriptiveCamelCase>-<msEpoch>`
