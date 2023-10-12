import {
  Box,
  Container,
  Footer,
  Group,
  Text,
  createStyles,
} from "@mantine/core";
import { transX } from "@mongez/react-localization";
const useStyles = createStyles(theme => ({
  flex: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.white,
    fontWeight: 300,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      justifyContent: "center",
      alignContent: "center",
      width: "100%",
    },
  },

  afterFooter: {
    border: "none",
    [theme.fn.smallerThan("sm")]: {
      height: "11rem",
      maxHeight: "12rem",
    },
  },
}));

export default function BottomFooter() {
  const { classes } = useStyles();
  return (
    <>
      <Box>
        <Footer
          height={90}
          px={70}
          bg="var(--secondaryColor)"
          className={classes.afterFooter}>
          <Container size="xl" px={0} sx={{ height: "100%" }}>
            <Group
              position="apart"
              sx={{ height: "100%" }}
              className={classes.flex}>
              <div className="textWhite">
                {transX("copyright", {
                  d: (
                    <Text span className="primaryColor">
                      pocofood
                    </Text>
                  ),
                })}
              </div>
              <img
                src="https://demo2.pavothemes.com/poco/wp-content/uploads/2020/08/footer_img1.png"
                alt="footer logo"
              />
            </Group>
          </Container>
        </Footer>
      </Box>
    </>
  );
}
