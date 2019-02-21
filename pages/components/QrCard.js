
import Link from 'next/link';
import QRCode from 'qrcode-react';

const QrCard = (props) => {
  const {computerId, baseUrl} = props;  
  return (
    <div>
      <QRCode value={`${baseUrl}/${computerId}/device`}></QRCode>
      <div>
        <Link as= {`/${computerId}/device`} href={`/device?id=${computerId}`}>
          详情
        </Link>
      </div>   
    </div>
  )
}

export default QrCard;