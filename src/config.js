export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    BUCKET: "notes-app-uploads-example"
  },
  apiGateway: {
    URL: "https://2fb8g10t4b.execute-api.us-east-2.amazonaws.com/prod",
    REGION: "us-east-2"
  },
  cognito: {
    USER_POOL_ID: "us-east-2_z0BE8otR6",
    APP_CLIENT_ID: "7jic7k4rojihskqtv4mhmn0h5m",
    REGION: "us-east-2",
    IDENTITY_POOL_ID: "us-east-2:468f83a1-484f-48fb-b843-92a6b587f1cc",
  }
};