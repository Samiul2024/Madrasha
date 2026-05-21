import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  keywords,
  url,
}) => {
  const siteTitle =
    title
      ? `${title} | Darul Iman Islamiyah`
      : "Darul Iman Islamiyah";

  return (
    <Helmet>
      <title>
        {siteTitle}
      </title>

      <meta
        name="description"
        content={
          description ||
          "Darul Iman Islamiyah - Modern Islamic Madrasa in Bangladesh offering Hifz, Nazera, Arabic, and Islamic education."
        }
      />

      <meta
        name="keywords"
        content={
          keywords ||
          "madrasa, islamic school, hifz, quran learning, islamic education, bangladesh madrasa"
        }
      />

      <meta
        property="og:title"
        content={siteTitle}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:url"
        content={
          url ||
          "https://darulimanislamiyah.com"
        }
      />

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <link
        rel="canonical"
        href={
          url ||
          "https://darulimanislamiyah.com"
        }
      />
    </Helmet>
  );
};

export default SEO;
