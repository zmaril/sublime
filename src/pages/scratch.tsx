import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import tcss from "@/styles/Table.module.css";
import Footer from "../components/footer";
import { Table } from "@mantine/core";
const inter = Inter({ subsets: ["latin"] });

function defaultBody() {
  return { upper: "cool", torso: "cool", lower: "cool" };
}

//conneciton type, just a string? somebody about frame

const elements = [1, 2, 3, 4, 5, 6, 7, 8].map((i) => ({
  beat: i,
  leader: defaultBody(),
  connection: "",
  follower: defaultBody(),
}));

function LeaderTable(leader: any) {
  return (
    <Table striped withBorder withColumnBorders>
      <tbody>
        <tr>
          <td className={tcss.leaderlabel}>Upper</td>
          <td>{leader.upper}</td>
        </tr>
        <tr>
          <td>Torso</td>
          <td>{leader.torso}</td>
        </tr>
        <tr>
          <td>Lower</td>
          <td>{leader.lower}</td>
        </tr>
      </tbody>
    </Table>
  );
}

function FollowerTable(follower: any) {
  return (
    <Table striped withBorder withColumnBorders>
      <tbody>
        <tr>
          <td>{follower.upper}</td>
          <td className={tcss.followerlabel}>Upper</td>
        </tr>
        <tr>
          <td>{follower.torso}</td>
          <td>Torso</td>
        </tr>
        <tr>
          <td>{follower.lower}</td>
          <td>Lower</td>
        </tr>
      </tbody>
    </Table>
  );
}

function SublimeTable() {
  const rows = elements.map((element) => (
    <tr key={element.beat}>
      <td className={tcss.beat}>{element.beat}</td>
      <td>
        <LeaderTable lead={element.leader} />
      </td>
      <td>{element.connection}</td>
      <td>
        <FollowerTable lead={element.follower} />
      </td>
    </tr>
  ));

  return (
    <Table withBorder withColumnBorders className={tcss.sequence_table}>
      <thead>
        <tr>
          <th className={tcss.beat}>Beat</th>
          <th className={tcss.header}>Lead</th>
          <th className={tcss.header}>Connection</th>
          <th className={tcss.header}>Follower</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div>
          <SublimeTable />
        </div>
      </main>
    </>
  );
}
