import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "Vadym Rekel — tłumacz przysięgły języka ukraińskiego TP/27/17 w Krakowie";
export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          background: "#f5f0e6",
          color: "#13100c",
          fontFamily: "Georgia, serif",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "720px",
            height: "720px",
            borderRadius: "999px",
            background: "rgba(182, 138, 58, 0.16)",
            top: "-260px",
            left: "-180px"
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "520px",
            height: "520px",
            borderRadius: "999px",
            background: "rgba(18, 60, 49, 0.14)",
            right: "-140px",
            bottom: "-180px"
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: "46px",
            border: "2px solid rgba(19, 16, 12, 0.14)",
            borderRadius: "34px",
            background: "rgba(255, 250, 242, 0.76)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "58px"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "40px"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column"
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: "25px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#7c5a1d",
                  fontFamily:
                    "Arial, Helvetica, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
                  fontWeight: 800,
                  marginBottom: "32px"
                }}
              >
                Kancelaria tłumacza przysięgłego
              </div>

              <div
                style={{
                  display: "flex",
                  fontSize: "72px",
                  lineHeight: 0.96,
                  letterSpacing: "-0.06em",
                  maxWidth: "780px",
                  fontWeight: 700
                }}
              >
                Tłumacz przysięgły języka ukraińskiego
              </div>

              <div
                style={{
                  display: "flex",
                  marginTop: "26px",
                  fontSize: "35px",
                  lineHeight: 1.15,
                  color: "#6e6256",
                  maxWidth: "780px"
                }}
              >
                Sąd · Policja · Prokuratura · Kraków · cała Polska
              </div>
            </div>

            <div
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "999px",
                background: "#123c31",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily:
                  "Arial, Helvetica, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
                fontSize: "48px",
                fontWeight: 900,
                letterSpacing: "-0.08em"
              }}
            >
              VR
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              gap: "30px"
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px"
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: "34px",
                  fontWeight: 700
                }}
              >
                Vadym Rekel
              </div>

              <div
                style={{
                  display: "flex",
                  fontSize: "24px",
                  color: "#6e6256"
                }}
              >
                TP/27/17 · dokumenty z całej Polski zdalnie
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px 28px",
                borderRadius: "999px",
                background: "#123c31",
                color: "#fff",
                fontFamily:
                  "Arial, Helvetica, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
                fontSize: "28px",
                fontWeight: 900
              }}
            >
              883 040 483
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}