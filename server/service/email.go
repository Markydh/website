package service

import (
	"crypto/rand"
	"fmt"
	"math/big"
	"server/global"

	"gopkg.in/gomail.v2"
)

func GenerateRandomCode(length int) (string, error) {
	const charset = "0123456789"
	code := make([]byte, length)

	for i := range code {
		n, err := rand.Int(rand.Reader, big.NewInt(int64(len(charset))))
		if err != nil {
			return "", err
		}
		code[i] = charset[n.Int64()]
	}

	return string(code), nil
}

func SendVerificationEmail(email, code string) error {
	config := global.Config.System
	message := gomail.NewMessage()
	message.SetHeader("From", config.SMTPEmail)
	message.SetHeader("To", email)
	message.SetHeader("Subject", "验证码")
	message.SetBody("text/plain", fmt.Sprintf("你在www.markydh.cn里的验证码是: %s", code))

	dialer := gomail.NewDialer(config.SMTPHost, config.SMTPPort, config.SMTPEmail, config.SMTPPassword)

	return dialer.DialAndSend(message)
}
