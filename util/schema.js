import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const MockInterview = pgTable("mockInterview", {
  id: serial("id").primaryKey(),
  jsonMockResp: text("jsonMockResp").notNull(),
  jobPosition: varchar("jobPosition", { length: 256 }).notNull(),
  jobDesc: varchar("jobDesc", { length: 256 }).notNull(),
  jobExperience: varchar("jobExperience", { length: 256 }).notNull(),
  createdBy: varchar("createdBy", { length: 256 }).notNull(),
  createdAt: varchar("createdAt", { length: 256 }),
  mockId: varchar("mockId", { length: 256 }).notNull(),
});

export const UserAnswer = pgTable("userAnswer", {
  id: serial("id").primaryKey(),
  mockIdRef: varchar("mockId").notNull(),
  question: varchar("question").notNull(),
  correctAns: text("correctAns"),
  userAnswer: text("userAns"),
  feedback: text("feedback"),
  rating: varchar("rating"),
  userEmail: varchar("userEmail"),
  createdAt: varchar("createdAt"),
});
