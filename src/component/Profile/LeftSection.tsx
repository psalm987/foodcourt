import { Box, Container, Skeleton } from "@mui/material";
import { COLORS } from "../../theme/constant";
import CustomAvatar from "../CustomAvatar";
import TextListItem from "../TextListItem";
import H2 from "../Typography/H2";
import { useQuery, gql } from "@apollo/client";

const COMPANY_QUERY = gql`
  {
    company {
      cto
      ceo
      name
    }
  }
`;

const LeftSection = () => {
  const { data, loading, error } = useQuery(COMPANY_QUERY);

  if (error) return <pre>{error.message}</pre>;

  return (
    <Box
      sx={{
        border: `1px solid ${COLORS.border[1]}`,
        py: 7,
        width: "100%",
        borderRadius: "12px",
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <CustomAvatar loading={loading}>
            {data?.company?.name[0]}
          </CustomAvatar>
          {loading ? (
            <Skeleton variant="text" height={50} width={150} />
          ) : (
            <H2>{data?.company?.name}</H2>
          )}
        </Box>
        <Box sx={{ mt: 6, display: "flex", flexDirection: "column", gap: 3 }}>
          <TextListItem
            primary={data?.company?.ceo}
            secondary="CEO"
            loading={loading}
          />
          <TextListItem
            primary={data?.company?.cto}
            secondary="CTO"
            loading={loading}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default LeftSection;
