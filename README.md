# Portfolio Site

## Development

Requirements:
- node ^18.18.0 || >= 20.0.0
- yarn >=1.22.0
- go
- make
- aws cli ( configured )

Run the ui locally
```bash
cd ui
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
- [ ] Certifications aren't links
- [ ] See about using Pluralsight api to display skills
- [ ] Update projects ( let's have much less but good quality )
- [ ] Move projects data to S3 bucket
- [ ] Start screen needs a tidy up ( maybe color the social icons )

### Contact API

- [ ] Save message in DynamoDB
- [ ] Use notification service ( probably SNS ) to notify me of message received
- [ ] Email sender with a "got the message, thanks"
