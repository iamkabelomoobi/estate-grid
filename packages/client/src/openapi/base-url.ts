let estateGridApiBaseUrl = "";

export const setEstateGridApiBaseUrl = (baseUrl: string): void => {
  estateGridApiBaseUrl = baseUrl.replace(/\/+$/, "");
};

export const getEstateGridApiBaseUrl = (): string => estateGridApiBaseUrl;
