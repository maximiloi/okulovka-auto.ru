"use client";
import { useEffect, useState } from "react";

type GroupInfo = {
  groupNumber: string;
  startTrainingDate: string;
  practiceTeachers: string[];
  studentCount: number;
};

export default function SeatsTable() {
  const [groups, setGroups] = useState<GroupInfo[]>([]);
  const [loading, setLoading] = useState(true);

  const companyId = "0f334594-f2d1-43e9-8e1c-26c0470cb5da";

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const res = await fetch(
          `https://auto-school-app.ru/api/seats?companyId=${companyId}`,
        );
        const data = await res.json();
        setGroups(data);
      } catch (error) {
        console.error("Ошибка загрузки данных:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGroups();
  }, [companyId]);

  if (loading) return <p className="text-gray-600">Загрузка данных...</p>;

  if (!groups.length)
    return (
      <p className="text-gray-600">
        Запись в группы на текущий момент не ведётся.
      </p>
    );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const formatShortName = (full: string) => {
    const parts = full.trim().split(" ");
    if (parts.length === 3) {
      return `${parts[0]} ${parts[1][0]}. ${parts[2][0]}.`;
    } else if (parts.length === 2) {
      return `${parts[0]} ${parts[1][0]}.`;
    } else {
      return full;
    }
  };

  return (
    <>
      <h2 className="text-3xl font-bold">Проходит набор в группы:</h2>
      <div className="w-full overflow-x-auto">
        <table className="min-w-full rounded-md border border-gray-300 text-left text-sm text-gray-700 shadow-md md:text-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">Номер группы</th>
              <th className="border px-4 py-2">Начало занятий</th>
              <th className="border px-4 py-2">Инструктор</th>
              <th className="border px-4 py-2">Осталось мест</th>
            </tr>
          </thead>
          <tbody>
            {groups.map((group, index) => (
              <tr key={index} className="transition-colors hover:bg-gray-50">
                <td className="border px-4 py-2">{group.groupNumber} гр.</td>
                <td className="border px-4 py-2">
                  {formatDate(group.startTrainingDate)}
                </td>
                <td className="border px-4 py-2">
                  {group.practiceTeachers.length > 0
                    ? formatShortName(group.practiceTeachers[0])
                    : "—"}
                </td>
                <td className="border px-4 py-2">{group.studentCount} мест</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
