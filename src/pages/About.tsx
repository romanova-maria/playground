import { useLoaderData, User } from "../router";
import { TextLink } from "../components";

const About = () => {
  const { login, avatar_url, html_url } = useLoaderData() as User;
  return (
    <div>
      <div>
        <b>Login:</b> {login}
      </div>
      <div>
        <b>Repo link:</b>{" "}
        <TextLink to={html_url} testId="author-repo-link">
          {html_url}
        </TextLink>
      </div>
      <br />
      <img src={avatar_url} alt="Author's avatar" />
    </div>
  );
};

export default About;
