# TESTS React avec Jest et Testing LIbrary (RTL)

## Assertion JEST et Jest-DOM

```js
expect(element.textContent).toBe('Hello')
```

Dans CRA, Jest-dom est importé via le script setupTest.js aavant chaque test et fournit des matchers basé sur le DOM (tobeVisible, toBeChecked ...)

## La différence entre Jest et RTL

RTL effectue un rendu des composants dans le DOM virtuel,et permet la recherche et línteraction avec celui-ci.
Jest est un lanceur de tests et forunit des assertions

Jest indique qu'un test réussit s'il n'y a pas d'exception levée (donc un test vide passe)

## Accessibilité

RTL recommande de chercher les éléments en se basant sur des attributs d'accessibilité comme (``role``,``label`` pour les formulaires,placeholder,texte) ensuite sur de sélecteurs comme ``alt`` ou `title` et seulement en dernier recours les **id**

Les rôles à utiliser sont visibles ici : [lien](https://www.w3.org/TR/wai-aria/#role_definitions)

## Jest et modules CSS

Les modules css sont ingnorés par Jest et les tests dstyle basés sur des classes importées ne vont pas fonctionner.
Si une classe Css a de límportnace pour une fonction alors on peut utliser 
[jest-css-modules-transform](https://www.npmjs.com/package/jest-css-modules-transform)
