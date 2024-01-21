---
title: 'Crop Doctor'
date: '2023-02-01'
description: '아픈 작물을 손에 담아 분석하다, 작물진단 서비스 Crop Doctor'
imageUrl: '/CropDoctor.png'
---

# 🌱 어서오세요, 어디가 아파서 오셨나요?

> 아픈 작물을 손에 담아 분석하다, 작물진단 서비스 Crop Doctor

![](https://i.imgur.com/meXlsCh.png)

코로나 19를 겪으며 더욱 많은 사람들이 식물을 키우는 것에 더 큰 관심을 가지기 시작했습니다.

주말농장을 운영하는 사람들, 반려 식물들을 키우는 사람들, 농작물을 키우시는데 경험이 부족한 초보 농부분들까지!

우리의 소중한 작물에 전염병이 감염되었음에도, 모른다는 이유로 방치해두었다가는 천천히 시들어가는 모습을 지켜봐야만 할 지도 몰라요.

작물 병해 진단 서비스 `Crop Doctor`를 통해 여러분의 소중한 작물이 어디 아픈 데 없는 지 확인해보는 건 어떨까요?

---

## 📚 TECH STACKS

Frontend: `React`, `Vite`, `TypeScript`, `TailwindCSS`  
Backend: `Django`, `Gunicorn`, `Swagger`, `NGINX`, `RabbitMQ`, `Celery`  
Monitoring: `Prometheus`, `Grafana`, `Elasticsearch`, `Logstash`, `Kibana`, `Slack`  
Database & Storage: `Amazon RDS`, `Amazon S3`, `MySQL`  
DevOps: `Docker`, `Amazon EC2`, `Github Actions`  
AI: `Pytorch`, `Yolo`

---

## 📌 System Architecture

![](https://i.imgur.com/m5uVdPv.png)

---

## 🌬️ Flowchart

![](https://i.imgur.com/pAPppFZ.png)

---

## Demo

[![](https://i.imgur.com/s84yOKb.png)](https://www.youtube.com/watch?v=4aessr81ijw)

---

## 굉장히 떨렸던 그 시절의 발표현장(온라인 발표영상)

[![](https://i.imgur.com/hs8GEoQ.png)](https://www.youtube.com/live/U99dm39JVd0?si=1WNNSvCpN2JLXUpf&t=1169)

---

## UI / UX Preview

### SignUp / Login 페이지

> JWT 토큰을 사용하는 페이지입니다.

![](https://user-images.githubusercontent.com/97827316/215984078-3cbe440e-c4bc-4ae3-9a2b-662ec2dae079.gif)

### 작물 진단, 진단 결과 페이지

> 병에 걸린 작물의 이미지를 선택하여 AI로 진단하는 페이지이며, 만약 병에 걸린 작물이라면 원인과 해결책을 함께 제공합니다.

![](https://user-images.githubusercontent.com/97827316/215984379-20db97b3-e90c-4857-bb46-c457b61b632c.gif)

### 기록 페이지

> 로그인 시에만 사용할 수 있는 기능으로, 진단했던 작물들이 저장되어 나중에 다시 볼 수 있는 기능을 제공하기 위한 페이지입니다.  
카테고리별로 확인할 수 있으며, 해당 기록에 대한 자세한 정보의 확인 / 삭제가 가능합니다.

![](https://user-images.githubusercontent.com/97827316/215984492-50f4e265-a738-41a9-8463-532ddb453c68.gif)

### 통계 페이지

> 크롭닥터 진단 데이터를 기반으로 통계가 표시됩니다.  
작물별 병 발생 횟수에 대한 통계, 각 작물이 어떤 병에 많이 걸리는지 바 차트 형태로 정보를 제공합니다.  
월별 병 발생 통계, 카테고리에서 선택된 작물이 월별로 어떻게 병이 퍼지는지 라인 그래프 형태로 제공합니다. 반응형 웹 페이지

![](https://user-images.githubusercontent.com/84130518/216145065-275acbcd-2fed-48f2-839c-69294a5dc8e1.gif)

### 반응형 디자인 제공

![](https://user-images.githubusercontent.com/84130518/216141786-cdafcb67-0af9-49cb-9e2c-005e14bac7b2.gif)

---

## 🤖 AI

> AI는 YoloV5를 사용했으며, 정밀도-신뢰도 곡선 및 학습 과정과 성능은 다음과 같습니다.  

![](https://i.imgur.com/BFfsn8g.png)

> 결과

![](https://i.imgur.com/yBzOcIh.png)

> 실제로 AI에 의해 분석된 사진들  

![](https://i.imgur.com/XsS4RRJ.png)

## 🖥️ Moniterings

> Kibana Dashboard

![](https://i.imgur.com/xKUdKqC.png)

> Grafana Dashboard & Slack Alert

![](https://i.imgur.com/XP9p1J0.png)

> 만약 일정 수치(85%)가 넘으면 Grafana에서 Slack으로 알람을 보냅니다.

![](https://i.imgur.com/E5WqqWA.png)

---

## Swagger

![](https://i.imgur.com/0QB5OhZ.png)

---

## Visit Our Project!

[Visit GitHub Organization(Repository)](https://github.com/S-V-23-BootCamp-Team-F)  
[Visit Medium](https://medium.com/@tminstaller/siliconvalley-winter-bootcamp-cropdoctor-18d65ddf8cc)  
[프로젝트 회고](https://time-map-installer.tistory.com/162)

---

## 👥 Our Team(click to visit github)

[**강용민**(Leader)](https://github.com/goldapple-ce): `Backend`, `DevOps`  
[**백동열**(Vice Leader)](https://github.com/TMInstaller): `Frontend`, `Backend`  
[**이지윤**](https://github.com/jiyoon0701): `Frontend`, `Backend`, `DevOps`  
[**김유라**](https://github.com/yura0302): `Frontend`  
[**권찬영**](https://github.com/fnzl54): `Backend`, `DevOps`, `AI Engineering`  
[**황현성**](https://github.com/hstla): `Backend`, `DevOps`  
[**이규현**](https://github.com/Mayreeel): `Frontend`