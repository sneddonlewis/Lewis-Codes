package db

import (
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/dynamodb"
)

const (
	TABLE_NAME = "sneddsy-contact-table"
)

type MessageRepo interface {
	CreateMessage(email, message string) error
}

type Client struct {
	db *dynamodb.DynamoDB
}

func NewClient() Client {
	dbSession := session.Must(session.NewSession())
	db := dynamodb.New(dbSession)

	return Client{
		db: db,
	}
}

func (client Client) CreateMessage(email, message string) error {
	item := &dynamodb.PutItemInput{
		TableName: aws.String(TABLE_NAME),
		Item: map[string]*dynamodb.AttributeValue{
			"email": {
				S: aws.String(email),
			},
			"message": {
				S: aws.String(message),
			},
		},
	}

	_, err := client.db.PutItem(item)
	return err
}
