import { LiFiWidget } from "@lifi/widget";

export const Widget = () => {
  return (
    <LiFiWidget
      config={{
        containerStyle: {
          boxShadow:
            "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
          borderRadius: "16px",
          margin: "30px",
          width: 600,
        },
        theme: {
          palette: {
            primary: { main: "#00FFAB" },
            secondary: { main: "rgb(155, 210, 238)" },
          }
        }, 
        typography: {
          fontFamily: 'Montserrat',
        },
        appearance: 'dark',
        variant: "expandable",
        subvariant: "split",
        hiddenUI: ['appearance'],
      }}
      integrator="exchain"
    />
  );
};
