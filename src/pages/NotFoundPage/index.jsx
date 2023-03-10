import { CenterColumn, GridThreeCol } from "app/layouts/GridThreeCol";
import UrlNotFound from "widgets/app/UrlNotFound";

function NotFoundPage() {
  return (
    <GridThreeCol>
      <CenterColumn>
        <UrlNotFound />
      </CenterColumn>
    </GridThreeCol>
  );
}

export default NotFoundPage;
