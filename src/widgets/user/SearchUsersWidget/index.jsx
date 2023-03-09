import { useMemo, useState } from "react";
import {
  Box, List, ListItem, Typography,
} from "@mui/material";

import { userApi } from "entities/user";
import SearchWithUrlParam from "widgets/app/SearchWithUrlParam";
import PersonTittle from "features/user/PersonTitle";
import useCallbackOnScroll from "shared/lib/hooks/useCallbackOnScroll";
import Loader from "shared/ui/Loader";
import WidgetWrapper from "shared/ui/WidgetWrapper";

function SearchUsersWidget() {
  const [queryString, setQueryString] = useState("");
  const [page, setPage] = useState(1);

  const { data, isLoading, isFetching } = userApi.useSearchUsersByNameQuery({ queryString, page });

  const handleChangeQuery = (query) => {
    if (page > 1) setPage(1);
    setQueryString(query);
  };

  const handleSetNextPage = () => {
    if (!data || data.users.length >= data.count) return;
    setPage((prev) => prev + 1);
  };

  const observedRef = useCallbackOnScroll(handleSetNextPage, { skip: isFetching });

  const foundUsersList = useMemo(() => (data
    ? data.users.map(({
      _id, firstName, lastName, location, picturePath,
    }) => (
      <ListItem key={_id}>
        <PersonTittle
          personId={_id}
          firstName={firstName}
          lastName={lastName}
          subtitle={location}
          userPicturePath={picturePath}
        />
      </ListItem>
    ))
    : []), [data]);

  return (
    <WidgetWrapper>
      <SearchWithUrlParam onChangeCallback={handleChangeQuery} isFetching={isFetching} />

      <List sx={{ mt: "2rem", "& li": { display: "block" } }}>
        {foundUsersList.length ? (
          foundUsersList
        ) : (
          <Typography textAlign="center">nothing found...</Typography>
        )}
      </List>

      {!isLoading && <Box ref={observedRef}>{isFetching && <Loader />}</Box>}
    </WidgetWrapper>
  );
}

export default SearchUsersWidget;
