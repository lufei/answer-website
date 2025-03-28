import React, { FC, useEffect, useState } from 'react';
import Link from '@docusaurus/Link';
import { Row, Col, Button } from 'react-bootstrap';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Icon from '@site/src/components/Icon';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import data from '@site/static/data/stars.json';
import styles from './index.module.css';

const list = [
  <Translate id="home.title.qa">
    Q&A Platform
  </Translate>,
  <Translate id="home.title.knowledge">
    Knowledge Sharing Platform
  </Translate>,
  <Translate id="home.title.community">
    Community Forum
  </Translate>,
  <Translate id="home.title.base">
    Knowledge Base
  </Translate>,
  <Translate id="home.title.developer">
    Developer Hub
  </Translate>,
  <Translate id="home.title.support">
    Support Center
  </Translate>,
]

const HomeHead: FC = () => {
  const [slogan, setSlogan] = useState(<Translate id="home.title.qa">
  Q&A Platform
</Translate>);
  const [sloganClass, setSloganClss] = useState('sloganIn');

  const { i18n: { currentLocale } } = useDocusaurusContext();

  useEffect(() => {
      let i = 0;
      const timer = setInterval(() => {
        setSloganClss('sloganOut');
        setTimeout(() => {
          setSlogan(list[i]);
          setSloganClss('sloganIn');
        }, 300);
        i++;
        if (i === list.length) {
          i = 0;
        }
      }, 4500);
    () => {
      clearInterval(timer)
    }
  }, []);



  function numWord($num) {
    if ($num >= 1000 && $num < 1000000) {
      $num = Math.round($num / 100) / 10 + 'k';
    } else {
      if ($num >= 1000000) {
        $num = Math.round($num / 100000) / 10 + 'm';
      }
    }
    return $num;
  }

  return (
    <header className='pt-5 pb-3'>
      <div className="container pt-3">
        <Row className='justify-content-center'>
          <Col md={12} lg={10} className='d-flex flex-column align-items-center'>
            <img
              src={require('@site/static/img/head-icon.png').default}
              alt="head-icon"
              width="168"
              height="168"
              className="mb-4"
            />

            <h1 className={clsx('sm-h1 fw-bold', styles.h1)}>
              <Translate
                id="home.title.build"
              >
                Build a
              </Translate>
              {currentLocale === 'zh-CN' ? <br /> : ' '}
              <span className={clsx('text-warning text-decoration-underline link-offset-1', styles.slogan, styles[sloganClass])}>
                <span className='text-body'>{slogan}</span>
              </span>
              <br />
              <Translate
                id="home.title.teams"
              >
                with Apache Answer
              </Translate>
            </h1>

            <div
              className={clsx('text-secondary text-center mb-4 px-4', styles.intro)}
            >
              <Translate
                id="home.description"
                values={{
                  br: currentLocale === 'zh-CN' ? <br /> : '',
                }}
              >
                {"A Q&A platform software for teams at any scale.{br} Whether it’s a community forum, help center, or knowledge management platform, you can always count on Answer."}
              </Translate>
            </div>

            <div className="d-flex mb-4">
              <Button
                size="lg"
                variant="primary"
                className="fw-normal fs-20 btnMain me-3"
                href="/docs"
              >
                <Translate id="home.btn.started">Get Started</Translate>
              </Button>

              <Button
                size="lg"
                variant="dark"
                className="btnMain fw-normal fs-20"
                href="https://github.com/apache/answer"
                target="_blank"
              >
                <Icon name="github" size="24px"  className="me-2" />
                {` Star `}
                {numWord(data.stars)}
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </header>
  );
};

export default HomeHead;
