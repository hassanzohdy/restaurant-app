import {
  ActionIcon,
  Anchor,
  Container,
  Divider,
  Group,
  Input,
  Text,
  TypographyStylesProvider,
  createStyles,
} from "@mantine/core";
import { trans } from "@mongez/localization";

import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandWordpress,
  IconBrandYoutube,
} from "@tabler/icons-react";
import Buttons from "apps/front-office/design-system/components/Buttons";

const useStyles = createStyles(theme => ({
  footer: {
    paddingTop: "100px",
    backgroundColor: "#181818",
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    padding: "90px 0px",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  groups: {
    display: "flex",
    justifyContent: "space-evenly",
    flexBasis: "100%",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignContent: "center",
    },
  },

  social: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

export default function TopFooter() {
  const { classes } = useStyles();
  return (
    <>
      <footer className={classes.footer}>
        <Divider
          color="#303030"
          my="xs"
          label={
            <img
              width="152"
              height="47"
              src="https://demo2.pavothemes.com/poco/wp-content/uploads/2020/08/logo_footer.png"
              alt=""
              loading="lazy"
              sizes="(max-width: 152px) 100vw, 152px"
            />
          }
          labelPosition="center"
        />
        <Container className={classes.inner} size="xl" px={0}>
          <div className={classes.groups}>
            <Text>
              <TypographyStylesProvider>
                <h3>{trans("address")}</h3>
                <p className="footerParagraph">
                  570 8th Ave,
                  <br /> {trans("newYork")}, NY 10018 <br />{" "}
                  {trans("unitedStates")}.
                </p>
              </TypographyStylesProvider>
            </Text>
            <Text>
              <TypographyStylesProvider>
                <h3>{trans("bookTable")}</h3>
                <p className="footerParagraph">
                  Dogfood och Sliders foodtruck. <br /> Under Om oss kan ni läsa
                </p>
                <Text className="primaryColor bookNumber">(850) 435-4155</Text>
              </TypographyStylesProvider>
            </Text>
            <Text>
              <TypographyStylesProvider>
                <h3>{trans("openingHours")}</h3>
                <p className="footerParagraph">
                  {trans("monday")} – {trans("friday")}:{" "}
                  <span className="textWhite">
                    8{trans("am")} – 4{trans("pm")}{" "}
                  </span>
                  <br /> {trans("saturday")}:{" "}
                  <span className="textWhite">
                    9{trans("am")} – 5{trans("pm")}
                  </span>
                </p>
                <Group
                  spacing={15}
                  className={classes.social}
                  position="center"
                  noWrap>
                  <Anchor
                    href="https://www.facebook.com/opalwordpress/"
                    target="_blank">
                    <ActionIcon
                      className="socialIcon"
                      size="lg"
                      variant="filled"
                      bg="white"
                      radius="1rem">
                      <IconBrandFacebook
                        size="1.05rem"
                        stroke={1.0}
                        color="black"
                      />
                    </ActionIcon>
                  </Anchor>
                  <Anchor href="https://www.twitter.com" target="_blank">
                    <ActionIcon
                      className="socialIcon"
                      size="lg"
                      variant="filled"
                      bg="white"
                      radius="1rem">
                      <IconBrandTwitter
                        size="1.05rem"
                        stroke={1.5}
                        color="black"
                      />
                    </ActionIcon>
                  </Anchor>
                  <Anchor
                    href="https://www.youtube.com/user/WPOpalTheme"
                    target="_blank">
                    <ActionIcon
                      className="socialIcon"
                      size="lg"
                      variant="filled"
                      bg="white"
                      radius="1rem">
                      <IconBrandYoutube
                        size="1.05rem"
                        stroke={1.5}
                        color="black"
                      />
                    </ActionIcon>
                  </Anchor>
                  <Anchor href="https://www.wordpress.com" target="_blank">
                    <ActionIcon
                      className="socialIcon"
                      size="lg"
                      variant="filled"
                      bg="white"
                      radius="1rem">
                      <IconBrandWordpress
                        size="1.05rem"
                        stroke={1.5}
                        color="black"
                      />
                    </ActionIcon>
                  </Anchor>
                </Group>
              </TypographyStylesProvider>
            </Text>
            <Text>
              <TypographyStylesProvider>
                <h3>{trans("newsletter")}</h3>
                <p className="footerParagraph">
                  {trans("subscribeNewsletter")} <br />
                  {trans("latestUpdate")}
                </p>
              </TypographyStylesProvider>

              <Input
                className="footerEmailInput"
                type="email"
                variant="unstyled"
                size="md"
                placeholder={trans("email")}
                rightSectionWidth={85}
                rightSection={<Buttons />}
              />
            </Text>
          </div>
        </Container>
      </footer>
    </>
  );
}
