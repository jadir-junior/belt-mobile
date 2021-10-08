module.exports = (plop) => {
  plop.setGenerator('screen', {
    description: 'Crete a Screen',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your screen name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/screens/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/screens/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'templates/test.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/screens/{{pascalCase name}}/{{pascalCase name}}.styles.ts',
        templateFile: 'templates/styles.ts.hbs'
      }
    ]
  })
}
