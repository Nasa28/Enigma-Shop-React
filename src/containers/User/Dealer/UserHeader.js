import { useSelector } from 'react-redux';
import { Card, Avatar } from 'antd';
import moment from 'moment';
import React from 'react';
const { Meta } = Card;
const DealerConnectStripe = () => {
  const auth = useSelector((state) => state.authenticate);
  return (
    <>
      <div className=" d-flex align-items-center">
        <Card>
          <Meta
            avatar={<Avatar>{auth.firstName.charAt(0).toUpperCase()}</Avatar>}
            title={`${auth.firstName} ${auth.lastName}`}
            description={`Registred ${moment(auth.createdAt).fromNow()}`}
          />
        </Card>
      </div>
    </>
  );
};

export default DealerConnectStripe;
