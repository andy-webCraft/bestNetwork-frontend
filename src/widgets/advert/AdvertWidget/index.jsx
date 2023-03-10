import { Link, Typography } from "@mui/material";
import { advertApi, AdvertImage } from "entities/advert";
import FlexBetween from "shared/ui/FlexBetween";
import WidgetWrapper from "shared/ui/WidgetWrapper";
import AdvertSkeleton from "./skeleton";

function AdvertWidget() {
  const { data, isFetching } = advertApi.useGetAdvertQuery();

  if (isFetching) return <AdvertSkeleton />;
  if (!data) return undefined;

  return (
    <WidgetWrapper>
      <Typography variant="h5" fontWeight="500">
        Sponsored
      </Typography>

      <AdvertImage picturePath={data.advert.picturePath} />

      <FlexBetween>
        <Link href={data.advert.link} target="_blank">
          {data.advert.title}
        </Link>
        <Link href={data.advert.link} target="_blank">
          {data.advert.link}
        </Link>
      </FlexBetween>

      <Typography marginY="0.5rem">{data.advert.description}</Typography>
    </WidgetWrapper>
  );
}

export default AdvertWidget;
