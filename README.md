## Commit Code Guidelines

To ensure consistency and clarity in commit history, please follow the commit rules below.

#### Commit Message Structure

```bash
<type>: <subject>

<body>

<footer>

```

Where:

- **type**: The type of change (required, lowercase)
- **subject**: A brief description of the change (required, no all caps, no period at the end)
- **body**: A detailed description of the change, max 100 characters per line (optional, must follow rule if included)
- **footer**: Additional information such as ticket ID, breaking changes, etc., max 100 characters per line (optional,
  must follow rule if included)

#### Type

| Type     | Meaning                                                    |
| -------- | ---------------------------------------------------------- |
| build    | Changes related to the build system or dependencies        |
| chore    | Miscellaneous tasks that don't affect source or tests      |
| ci       | CI/CD configuration changes                                |
| docs     | Documentation updates                                      |
| feat     | Add new feature                                            |
| fix      | Bug fix                                                    |
| perf     | Performance optimization                                   |
| refactor | Refactor code, no feature added or bug fixed               |
| revert   | Revert previous commit                                     |
| style    | Code style changes (formatting, missing semi-colons, etc.) |
| test     | Add or update tests                                        |

## Unit Test Requirements

#### Components

- **Rendering**: Component renders correctly with default props
- **Props**: Component updates correctly when props change
- **Interactions**: Handles user events correctly (click, hover, input)
- **State**: Manages internal state properly
- **Conditional rendering**: Displays correct UI based on conditions
- **Error states**: Handles errors properly

#### Hooks

- **Return values**: Hook returns correct values
- **State updates**: State updates correctly when functions are called
- **Side effects**: Side effects are triggered at the right time
- **Error handling**: Handles errors properly

#### Utility Functions

- **Input/Output**: Function returns correct results for different inputs
- **Edge cases**: Handles edge cases correctly
- **Error handling**: Throws errors properly when needed

#### API Routes

- **Response format**: API returns data in the correct format
- **Status codes**: Returns correct status codes
- **Error handling**: Handles errors properly
- **Authentication/Authorization**: Checks access rights correctly

## Tutorial: Creating Components

#### Atoms

An atom is a component that meets the following criteria:

- Is a generic component.
- Cannot be broken down further.
- Has complexity equivalent to a single HTML tag.

Requirements when writing components:

- Should extend props from HTML tags.
- Highly customizable, ensuring reusability.
- If not a reusable generic component, write code directly in the parent component or in the parent component's folder
  inside molecules.

#### Molecules

A molecule is a component that meets the following criteria:

- A simple component but more complex than atoms, performing a specific small function, possibly using multiple atoms
  inside.

Requirements when writing components:

- Highly customizable, ensuring reusability (even if currently used by only one component).
- Each molecule should handle only one specific function.

#### Organisms

An organism is a component that meets the following criteria:

- Combines multiple molecules and atoms to create a more complex component.
- Represents a UI block.

Requirements when writing components:

- Each component is a UI block.

#### Templates

Templates are specific layouts in the UI composed of multiple organisms or molecules.

Requirements when writing components:

- Each component corresponds to a section in the page.

#### Pages

Pages are located inside the app folder. Each page corresponds to a unique route. They are a combination of templates.
