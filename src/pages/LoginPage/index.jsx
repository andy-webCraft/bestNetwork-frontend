import { CenterColumn, GridThreeCol } from "app/layouts/GridThreeCol";
import AuthWidget from "widgets/auth/AuthWidget";

function LoginPage() {
  return (
    <GridThreeCol>
      <CenterColumn>
        <AuthWidget />
      </CenterColumn>
    </GridThreeCol>
  );
}

export default LoginPage;
