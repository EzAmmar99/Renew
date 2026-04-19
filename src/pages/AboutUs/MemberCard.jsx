import React from 'react';
import { Typography, Avatar, Card } from 'antd';

const { Text, Paragraph } = Typography;

const MemberCard = ({ member }) => {
  return (
    <div style={{ 
      paddingTop: '120px', // مساحة تسمح للصورة بالبروز للأعلى
      width: '100%',
      maxWidth: '496px',
      margin: '0 auto'
    }}>
      <Card
        bordered={false}
        style={{
          background: '#ffffff',
          borderRadius: '80px', // حواف دائرية كبيرة كما في التصميم
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)', // ظلال ناعمة احترافية
          textAlign: 'center',
          position: 'relative',
          overflow: 'visible', // ضروري لبروز الصورة
          padding: '120px 40px 40px 40px', // بادينج علوي لترك مساحة تحت الصورة
        }}
      >
        {/* الحاوية الدائرية للصورة */}
        <div style={{
          position: 'absolute',
          top: '-122px', // نصف القطر تقريباً للأعلى
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
        }}>
          <div style={{
            padding: '10px',
            background: '#fff',
            borderRadius: '50%',
            boxShadow: '0 10px 25px rgba(0,0,0,0.05)'
          }}>
            <Avatar 
              size={245} 
              src={member?.img} 
              style={{ 
                border: '2px solid #f0f0f0',
                backgroundColor: '#f5f5f5' 
              }} 
            />
          </div>
        </div>

        {/* محتوى البطاقة */}
        <div style={{ marginBottom: '8px' }}>
          <Text style={{
            fontFamily: "'Alexandria', sans-serif",
            fontSize: '30px',
            fontWeight: 400,
            color: '#8dc63f', // اللون الأخضر الفاتح للاسم
            display: 'block',
            lineHeight: 1.2,
            marginTop: '12px' // مسافة بين الصورة والاسم
          }}>
            {member?.name}
          </Text>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <Text style={{
            fontFamily: "'Alexandria', sans-serif",
            fontSize: '24px',
            fontWeight: 400,
            color: '#8c8c8c', // رمادي للمسمى الوظيفي
            display: 'block',
            lineHeight: 1.4
          }}>
            {member?.role}
          </Text>
        </div>

        <Paragraph style={{
          fontFamily: "'Alexandria', sans-serif",
          fontSize: '16px',
          fontWeight: 400,
          color: '#434343',
          lineHeight: '1.6',
          textAlign: 'center',
          margin: 0
        }}>
          {member?.desc}
        </Paragraph>
      </Card>
    </div>
  );
};

export default MemberCard;