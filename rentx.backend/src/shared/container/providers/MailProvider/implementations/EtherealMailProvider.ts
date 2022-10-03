import { injectable } from "tsyringe";
import nodemailer, { Transporter } from "nodemailer";

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

  async sendMail(to: string, subject: string, body: string): Promise<void> {
    const message = await this.client.sendMail({
      to,
      from: "RentX <noreply@rentx.com.br>",
      subject,
      text: body,
      html: body,
    });
  }
}
