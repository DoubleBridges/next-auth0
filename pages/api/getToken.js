import auth0 from '../../lib/auth0';

export default async function session(req, res) {
  
  try {

    const { accessToken } = await auth0.getSession(req);
    if (accessToken) res.send(accessToken);
    res.status(200).end(accessToken);

  } catch (error) {
      
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
}