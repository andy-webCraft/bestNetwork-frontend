import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

import WidgetWrapper from "shared/ui/WidgetWrapper";
import LinkBtn from "shared/ui/LinkBtn";

function UrlNotFound() {
  const navigate = useNavigate();

  return (
    <WidgetWrapper textAlign="center" marginTop="4rem">
      <Typography variant="h2">404</Typography>
      <Typography variant="h4" m="1rem auto 3rem">
        The resource at this address was not found 😞
      </Typography>

      <LinkBtn onClick={() => navigate("/")}>Сlick to return to the home page</LinkBtn>
    </WidgetWrapper>
  );
}

export default UrlNotFound;
