type TPuzzles = {
  [key in TPuzzleDays]?: {
    [key in TPuzzlesPartNames]?: (input: string[]) => any;
  };
};
type TPuzzleDays = "dayOne" | "dayTwo" | "dayThree";
type TPuzzlesPartNames = "partOne" | "partTwo";
