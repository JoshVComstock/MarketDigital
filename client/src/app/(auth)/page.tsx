'use client'
import { Form, Input, Button, Checkbox, Typography, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

const { Title, Text } = Typography;

const Login = () => {
    const router = useRouter();

    const onFinish = async () => {
        return router.push('/dashboard')
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f5f5f5',
            padding: '20px'
        }}>
            <div style={{
                width: '100%',
                maxWidth: '400px',
                backgroundColor: 'white',
                padding: '48px 40px',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                    <Title level={2} style={{ margin: 0, marginBottom: '8px' }}>
                        Iniciar Sesión
                    </Title>
                    <Text type="secondary">
                        Ingresa tus credenciales para continuar
                    </Text>
                </div>

                <Form
                    name="login"
                    onFinish={onFinish}
                    layout="vertical"
                    size="large"
                >
                    <Form.Item
                        name="email"
                        label="Correo electrónico"
                        rules={[
                            { required: true, message: 'Por favor ingresa tu correo' },
                            { type: 'email', message: 'Ingresa un correo válido' }
                        ]}
                    >
                        <Input
                            prefix={<UserOutlined />}
                            placeholder="correo@ejemplo.com"
                        />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Contraseña"
                        rules={[
                            { required: true, message: 'Por favor ingresa tu contraseña' }
                        ]}
                    >
                        <Input.Password
                            prefix={<LockOutlined />}
                            placeholder="Contraseña"
                        />
                    </Form.Item>

                    <Form.Item>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Recordarme</Checkbox>
                            </Form.Item>
                            <a href="#" style={{ color: '#1890ff' }}>
                                ¿Olvidaste tu contraseña?
                            </a>
                        </div>
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            block
                        >
                            Iniciar Sesión
                        </Button>
                    </Form.Item>

                    <div style={{ textAlign: 'center' }}>
                        <Text type="secondary">
                            ¿No tienes una cuenta?{' '}
                            <a href="#" style={{ color: '#1890ff' }}>
                                Regístrate
                            </a>
                        </Text>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Login;