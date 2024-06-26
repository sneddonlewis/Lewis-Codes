# Portfolio Site

## Development

Requirements:
- node >=18.18.0
- yarn >=1.22.0
- go
- make
- aws cli ( configured )

Run the ui locally
```bash
cd ui
yarn
yarn dev
```

Deploy backend
```bash
cd contact-api
make
cd .. # back to project root
cd remote
yarn build
npx cdk deploy # will ask for confirmation
```

## TODOs

### UI

- [ ] Scrollspy doesn't activate links in nav bar
- [ ] Environment variables for dev/prod

### Contact API

- [x] Save message in DynamoDB
- [ ] Use notification service ( probably SNS ) to notify me of message received
- [ ] Email sender with a "got the message, thanks"
- [x] Abstract aws services
