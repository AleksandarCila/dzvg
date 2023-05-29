import { createBucketClient } from "@cosmicjs/sdk";

const cosmic = createBucketClient({
  bucketSlug: "dzvg-production",
  readKey: "M2r6DAIjGrW5tcwI1cXSWTP8bQzS5jgdUdeIxMAJ6xYHlXtUDJ",
  writeKey: "exlHYUosCL3hjcETBpdyGxex2cVdM01uPUq7CsPuaZwbGNeb3y",
});

export default cosmic;
