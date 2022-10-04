import { injectable } from "tsyringe";
import nodemailer, { Transporter } from "nodemailer";
import handlebars from "handlebars";
import fs from 'fs';

import { IMailProvider } from "../IMailProvider";

@injectable()
export class EtherealMailProvider implements IMailProvider {
  private client: Transporter;

  constructor() {
    nodemailer
      .createTestAccount()
      .then((account) => {
        const transporter = nodemailer.createTransport({
          host: account.smtp.host,
          port: account.smtp.port,
          secure: account.smtp.secure,
          auth: {
            user: account.user,
            pass: account.pass,
          },
        });

        this.client = transporter;
      })
      .catch((err) => console.error(err));
  }

  async sendMail(to: string, subject: string, variables: any, path: string): Promise<void> {
    const templateFileContent = fs.readFileSync(path).toString("utf-8");

    const templateParse = handlebars.compile(templateFileContent);

    const templateHtml = templateParse(variables)

    const message = await this.client.sendMail({
      to,
      from: "RentX <noreply@rentx.com.br>",
      subject,
      html: templateHtml,
    });

    console.log('message sent', message.messageId);
    console.log('preview url', nodemailer.getTestMessageUrl(message))
  }
}