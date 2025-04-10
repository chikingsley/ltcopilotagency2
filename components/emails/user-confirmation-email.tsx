import React from 'react';
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Text,
  Hr,
} from '@react-email/components';
import CopilotLogo from '../logo/copilot-logo';

interface UserConfirmationEmailProps {
  firstName: string;
}

export const UserConfirmationEmail: React.FC<Readonly<UserConfirmationEmailProps>> = ({ 
  firstName 
}) => (
  <Html>
    <Head />
    <Preview>Thanks for reaching out - CoPilot Agency</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={paragraph}>Hi {firstName},</Text>
        <Text style={paragraph}>
          Thanks for getting in touch via our website form! We&apos;ve received your message.
        </Text>
        <Text style={paragraph}>
          Either myself or a senior advisor will personally review your inquiry and reach out within 24 business hours.
        </Text>
        <Text style={paragraph}>
          If your matter is urgent, please don&apos;t hesitate to call me directly on my cell at +370 691 81 186 – I&apos;m here to help.
        </Text>
        <Text style={paragraph}>
          Best regards,
        </Text>
        <Text style={signatureName}>Klaudija Grabauskaitė</Text>
        <Text style={signatureTitle}>Co-Founder & CEO</Text>
        <Text style={signatureContact}>Copilot Agency</Text>
        <Text style={signatureContact}>klaudija@copilotagency.lt</Text>
        <Hr style={hr} />
        <CopilotLogo 
          fill="#000000" 
          title="Copilot Agency Logo" 
          width={150} 
          height="auto" 
          style={logoStyle}
        />
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: '#ffffff',
  fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 20px 48px',
  maxWidth: '580px',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '24px',
  margin: '16px 0',
};

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
};

const signatureName = {
  fontSize: '16px',
  lineHeight: '24px',
  margin: '16px 0 0 0',
};

const signatureTitle = {
  fontSize: '14px',
  lineHeight: '20px',
  color: '#555555',
  margin: '0 0 4px 0',
};

const signatureContact = {
  fontSize: '14px',
  lineHeight: '20px',
  color: '#555555',
  margin: '0',
};

const logoStyle = {
  margin: '20px 0 0 0',
};

export default UserConfirmationEmail;
