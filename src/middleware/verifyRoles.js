const verifyRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req?.roles) return res.sendStatus(401);
    const rolesArray = [...allowedRoles];
    const results = req.roles
      .map((role) => rolesArray.includes(role))
      .find((val) => val);

    console.log(req.roles, rolesArray, results);
    if (!results) return res.status(401).json({ message: 'Invalid' });
    next();
  };
};

module.exports = verifyRoles;
