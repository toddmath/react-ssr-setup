const routes = {
  home: '/',
  page1: '/page-1',
  page2: '/page-2',
}

type RouteParams = { [key: string]: string | number }

export const getRoute = (
  path: string,
  params?: RouteParams,
  routesConfig: any = routes
) =>
  path.split('.').reduce((routeBranch: any, pathItem: string) => {
    if (routeBranch && routeBranch[pathItem]) {
      const route = routeBranch[pathItem]
      if (typeof route === 'string') {
        if (!params || typeof params === 'undefined') {
          return route
        }

        return Object.entries(params).reduce((replaced, [key, value]) => {
          return replaced.replace(`:${key}`, String(value))
        }, route)
      }
      return routeBranch[pathItem]
    }
  }, routesConfig)

export default routes
