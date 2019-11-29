// Utilizando Basic Auth
// Username = inatel
// Password = alunosinatel

const checkAuth = (request, response, next) => {
    const token = request.headers.authorization;
    if (/aW5hdGVsOmFsdW5vc2luYXRlbA==/.test(token)) {
      next();
    } else {
      response.status(401).json({
        message: 'Você deve estar logado!',
        status: 401
      });
    }
  };
  
  module.exports = checkAuth;