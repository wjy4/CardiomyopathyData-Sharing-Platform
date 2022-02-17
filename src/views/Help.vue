<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-8">
        <div class="help">
          <h1>How can we help you?</h1>
          <p>
            Please use the drop down list below to select what you need help
            with
          </p>
          <select
            v-model="help_item"
            class="form-select my-4"
            aria-label="Default select example"
          >
            <option value="default" selected disabled hidden>
              Select Help
            </option>
            <option value="1">How to Register</option>
            <option value="2">How to Login</option>
            <option value="3">How to view account</option>
            <option value="4">How to submit data</option>
            <option value="5">How to delete data</option>
            <option value="6">How to query data</option>
            <option value="7">How to view Gene Details</option>
          </select>

          <div class="gif_display my-4">
            <div v-if="help_item == '1'">
              <p class="m-4">
                Please navigate to the "Register" tab on the top right and fill
                in the fields, a video demonstration is shown below:
              </p>
              <div
                style="
                  width: 100%;
                  height: 0px;
                  position: relative;
                  padding-bottom: 56.25%;
                "
              >
                <!-- Upload your video to https://streamable.com/ get the embedded link and paste it like how I've done  -->
                <iframe
                  src="https://streamable.com/e/i9383n"
                  frameborder="0"
                  width="100%"
                  height="100%"
                  allowfullscreen
                  style="
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    left: 0px;
                    top: 0px;
                    overflow: hidden;
                  "
                ></iframe>
              </div>
            </div>
            <div v-if="help_item == '2'">
              <p class="m-4">
                Please navigate to the "Login" tab on the top right and fill in
                the fields, a video demonstration is shown below:
              </p>
              <div
                style="
                  width: 100%;
                  height: 0px;
                  position: relative;
                  padding-bottom: 56.25%;
                "
              >
                <!-- Upload your video to https://streamable.com/ get the embedded link and paste it like how I've done  -->
                <iframe
                  src="https://streamable.com/e/i9383n"
                  frameborder="0"
                  width="100%"
                  height="100%"
                  allowfullscreen
                  style="
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    left: 0px;
                    top: 0px;
                    overflow: hidden;
                  "
                ></iframe>
              </div>
            </div>
            <div v-if="help_item == '3'">
              <p class="m-4">
                Please navigate to the "Account" tab while hovering over the
                "Home" tab, a video demonstration is shown below:
              </p>
              <div
                style="
                  width: 100%;
                  height: 0px;
                  position: relative;
                  padding-bottom: 56.25%;
                "
              >
                <!-- Upload your video to https://streamable.com/ get the embedded link and paste it like how I've done  -->
                <iframe
                  src="https://streamable.com/e/i9383n"
                  frameborder="0"
                  width="100%"
                  height="100%"
                  allowfullscreen
                  style="
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    left: 0px;
                    top: 0px;
                    overflow: hidden;
                  "
                ></iframe>
              </div>
            </div>
            <div v-if="help_item == '4'">
              <p class="m-4">
                Please navigate to the "Submit Data" tab while hovering over the
                "Home" tab, a video demonstration is shown below:
              </p>
              <div
                style="
                  width: 100%;
                  height: 0px;
                  position: relative;
                  padding-bottom: 56.25%;
                "
              >
                <!-- Upload your video to https://streamable.com/ get the embedded link and paste it like how I've done  -->
                <iframe
                  src="https://streamable.com/e/i9383n"
                  frameborder="0"
                  width="100%"
                  height="100%"
                  allowfullscreen
                  style="
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    left: 0px;
                    top: 0px;
                    overflow: hidden;
                  "
                ></iframe>
              </div>
            </div>
            <div v-if="help_item == '5'">
              <p class="m-4">
                Please navigate to the "???" tab while hovering over the "Home"
                tab, a video demonstration is shown below:
              </p>
              <div
                style="
                  width: 100%;
                  height: 0px;
                  position: relative;
                  padding-bottom: 56.25%;
                "
              >
                <!-- Upload your video to https://streamable.com/ get the embedded link and paste it like how I've done  -->
                <iframe
                  src="https://streamable.com/e/i9383n"
                  frameborder="0"
                  width="100%"
                  height="100%"
                  allowfullscreen
                  style="
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    left: 0px;
                    top: 0px;
                    overflow: hidden;
                  "
                ></iframe>
              </div>
            </div>
            <div v-if="help_item == '6'">
              <p class="m-4">
                Please navigate to the "Query Data" tab while hovering over the
                "Home" tab, a video demonstration is shown below:
              </p>
              <div
                style="
                  width: 100%;
                  height: 0px;
                  position: relative;
                  padding-bottom: 56.25%;
                "
              >
                <!-- Upload your video to https://streamable.com/ get the embedded link and paste it like how I've done  -->
                <iframe
                  src="https://streamable.com/e/i9383n"
                  frameborder="0"
                  width="100%"
                  height="100%"
                  allowfullscreen
                  style="
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    left: 0px;
                    top: 0px;
                    overflow: hidden;
                  "
                ></iframe>
              </div>
            </div>
            <div v-if="help_item == '7'">
              <p class="m-4">
                Please navigate to the "Gene Details" tab while hovering over
                the "Home" tab, a video demonstration is shown below:
              </p>
              <div
                style="
                  width: 100%;
                  height: 0px;
                  position: relative;
                  padding-bottom: 56.25%;
                "
              >
                <!-- Upload your video to https://streamable.com/ get the embedded link and paste it like how I've done  -->
                <iframe
                  src="https://streamable.com/e/i9383n"
                  frameborder="0"
                  width="100%"
                  height="100%"
                  allowfullscreen
                  style="
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    left: 0px;
                    top: 0px;
                    overflow: hidden;
                  "
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      help_item: "default",
    };
  },
};
</script>
