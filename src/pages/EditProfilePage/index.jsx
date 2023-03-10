import { CenterColumn, GridThreeCol } from "app/layouts/GridThreeCol";
import ProfileForm from "widgets/user/ProfileForm";
import WidgetWrapper from "shared/ui/WidgetWrapper";

function EditProfilePage() {
  return (
    <GridThreeCol>
      <CenterColumn>
        <WidgetWrapper>
          <ProfileForm />
        </WidgetWrapper>
      </CenterColumn>
    </GridThreeCol>
  );
}

export default EditProfilePage;
