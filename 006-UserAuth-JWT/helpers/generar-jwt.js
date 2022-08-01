import jwt from 'jsonwebtoken';
const { sign, verify } = jwt;

const generarJWT = (uid = "") => {
  return new Promise((resolve, reject) => {
    const payload = { uid };

    sign(
      payload,
      process.env.TOKEN_KEY,
      { expiresIn: "4h" },
      (err, token) => {
        if (err) {
          console.log(err);
          reject("No se pudo generar el token");
        } else {
          resolve(token);
        }
      }
    );
  });
};

export { generarJWT };
