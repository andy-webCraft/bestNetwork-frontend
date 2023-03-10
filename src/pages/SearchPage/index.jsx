import { CenterColumn, GridThreeCol } from "app/layouts/GridThreeCol";
import SearchUsersWidget from "widgets/user/SearchUsersWidget";

function SearchPage() {
  return (
    <GridThreeCol>
      <CenterColumn>
        <SearchUsersWidget />
      </CenterColumn>
    </GridThreeCol>
  );
}

export default SearchPage;
